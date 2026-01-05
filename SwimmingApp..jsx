import React, { useState, useEffect } from 'react';
import { db } from './lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/Library";
import { Button } from "./components/ui/Library";
import { Plus, Trophy, History, LayoutDashboard } from 'lucide-react';

export default function SwimmingApp() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Escuchar la Nube (Firebase)
  useEffect(() => {
    const q = query(collection(db, "swimming_records"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setRecords(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Guardar Marca
  const saveRecord = async (formData) => {
    await addDoc(collection(db, "swimming_records"), {
      ...formData,
      createdAt: new Date().toISOString()
    });
  };

  if (loading) return <div className="text-white text-center p-10">Cargando marcas desde la nube...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-blue-900/50">
          <TabsTrigger value="dashboard"><LayoutDashboard className="w-4 h-4 mr-2"/>Panel</TabsTrigger>
          <TabsTrigger value="add"><Plus className="w-4 h-4 mr-2"/>Añadir</TabsTrigger>
          <TabsTrigger value="records"><History className="w-4 h-4 mr-2"/>Historial</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          {/* Aquí va la lógica consolidada de Dashboard y Leaderboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
             {records.slice(0, 5).map(r => (
               <div key={r.id} className="bg-white/10 p-4 rounded-xl text-white border border-white/20">
                 <p className="font-bold">{r.swimmer}</p>
                 <p className="text-sm text-blue-300">{r.style} - {r.distance}m</p>
                 <p className="text-2xl mt-2">{r.time}</p>
               </div>
             ))}
          </div>
        </TabsContent>

        <TabsContent value="add">
           <RecordForm onSave={saveRecord} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Sub-componente de Formulario (Antes AddTimeForm.jsx)
function RecordForm({ onSave }) {
  const [form, setForm] = useState({ swimmer: '', style: 'Crol', distance: '50', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ ...form, time: '' });
    alert("¡Marca guardada en la nube para siempre!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl space-y-4 mt-4">
      <input className="w-full p-3 border rounded" placeholder="Nombre del Nadador" 
             value={form.swimmer} onChange={e => setForm({...form, swimmer: e.target.value})} required />
      <div className="grid grid-cols-2 gap-4">
        <select className="p-3 border rounded" value={form.style} onChange={e => setForm({...form, style: e.target.value})}>
          <option>Crol</option><option>Espalda</option><option>Pecho</option><option>Mariposa</option>
        </select>
        <input className="p-3 border rounded" placeholder="Tiempo (ej. 28.45)" 
               value={form.time} onChange={e => setForm({...form, time: e.target.value})} required />
      </div>
      <Button type="submit" className="w-full bg-blue-600">Guardar en Firebase</Button>
    </form>
  );
}
