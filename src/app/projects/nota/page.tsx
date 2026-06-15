"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface InvoiceItem {
  id: number;
  desc: string;
  qty: number;
  price: number;
}

function NotaContent() {
  const searchParams = useSearchParams();
  
  // Detection Modes
  const isEditMode = searchParams.get('edit') === 'true';
  const encodedData = searchParams.get('d');

  // Core States
  const [invoiceNo, setInvoiceNo] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("PAID");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [customer, setCustomer] = useState({ name: "", phone: "" });
  const [vehicle, setVehicle] = useState({ model: "", plateNo: "", odometer: "", battVoltage:"12.4"});
  const [tuningLog, setTuningLog] = useState({ mechanic: "Madz", ecuMap: "-", acc: "-" });
  const [items, setItems] = useState<InvoiceItem[]>([{ id: 1, desc: "", qty: 1, price: 0 }]);
  
  const [shareableLink, setShareableLink] = useState("");
  const [copied, setCopied] = useState(false);

  // Decode data from URL if customer opens the link
  useEffect(() => {
    if (encodedData) {
      try {
        const decodedString = atob(encodedData);
        const parsed = JSON.parse(decodeURIComponent(decodedString));
        
        setInvoiceNo(parsed.invoiceNo);
        setDate(parsed.date);
        setStatus(parsed.status);
        setPaymentMethod(parsed.paymentMethod);
        setCustomer(parsed.customer);
        setVehicle(parsed.vehicle);
        setTuningLog(parsed.tuningLog);
        setItems(parsed.items);
      } catch (error) {
        console.error("Failed to decode invoice data", error);
      }
    } else if (!isEditMode) {
      // Default placeholder if accessed directly without query
      const today = new Date();
      setDate(today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }));
      setInvoiceNo(`MW-${today.getFullYear()}${(today.getMonth()+1).toString().padStart(2, '0')}${today.getDate().toString().padStart(2, '0')}-001`);
    }
  }, [encodedData, isEditMode]);

  // Handle dynamic items
  const handleAddItem = () => setItems([...items, { id: Date.now(), desc: "", qty: 1, price: 0 }]);
  const handleRemoveItem = (id: number) => items.length > 1 && setItems(items.filter(item => item.id !== id));
  const handleItemChange = (id: number, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // Generate the un-editable link for customer
  const handleGenerateLink = () => {
    const payload = { invoiceNo, date, status, paymentMethod, customer, vehicle, tuningLog, items };
    const jsonString = encodeURIComponent(JSON.stringify(payload));
    const base64Encoded = btoa(jsonString);
    
    const baseUrl = window.location.origin + window.location.pathname;
    const finalUrl = `${baseUrl}?d=${base64Encoded}`;
    
    setShareableLink(finalUrl);
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const subtotal = items.reduce((acc, item) => acc + (item.qty * (item.price || 0)), 0);

  // If someone accesses the page normally without ?edit=true or ?d=..., force standard layout
  const showControlPanel = isEditMode && !encodedData;

  return (
    <div className="w-full min-h-screen pt-28 pb-10 px-4 sm:px-6 lg:px-8 font-sans bg-transparent text-zinc-900 dark:text-zinc-100 print:bg-white print:text-black print:pt-0 print:pb-0">
  <div className={`w-full max-w-7xl mx-auto ${showControlPanel ? 'grid grid-cols-1 lg:grid-cols-12 gap-8' : 'flex justify-center'} items-start print:block`}>
    
    {/* CONTROL PANEL (Kiri): Menyesuaikan Light / Dark Theme */}
    {showControlPanel && (
      <div className="lg:col-span-5 w-full bg-white dark:bg-zinc-900/50 backdrop-blur-md p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 h-fit space-y-5 print:hidden shadow-sm">
        <h2 className="text-sm font-black tracking-wider text-zinc-900 dark:text-zinc-100 uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2 flex items-center gap-2">
          <span>🔧</span> Madz Generator Panel
        </h2>
        
        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">No. Nota</label>
            <input type="text" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} className="w-full mt-1 p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          </div>
          <div>
            <label className="font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Tanggal</label>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1 p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          </div>
        </div>

        {/* Status & Method */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <label className="font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full mt-1 p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition appearance-none">
              <option value="PAID" className="bg-white dark:bg-zinc-950 text-green-600 dark:text-green-400 font-bold">PAID</option>
              <option value="UNPAID" className="bg-white dark:bg-zinc-950 text-amber-600 dark:text-amber-400 font-bold">UNPAID</option>
            </select>
          </div>
          <div>
            <label className="font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Payment Method</label>
            <input type="text" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full mt-1 p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          </div>
        </div>

        {/* Customer & Vehicle */}
        <div className="space-y-2 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          <h3 className="font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Customer & Vehicle</h3>
          <input type="text" placeholder="Nama Customer" value={customer.name} onChange={(e) => setCustomer({...customer, name: e.target.value})} className="w-full p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          <input type="text" placeholder="No. WhatsApp" value={customer.phone} onChange={(e) => setCustomer({...customer, phone: e.target.value})} className="w-full p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          <input type="text" placeholder="Model Motor" value={vehicle.model} onChange={(e) => setVehicle({...vehicle, model: e.target.value})} className="w-full p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="No. Polisi" value={vehicle.plateNo} onChange={(e) => setVehicle({...vehicle, plateNo: e.target.value})} className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
            <input type="text" placeholder="Odometer" value={vehicle.odometer} onChange={(e) => setVehicle({...vehicle, odometer: e.target.value})} className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
            <input type="text" placeholder="Batt Voltage" value={vehicle.battVoltage} onChange={(e) => setVehicle({...vehicle, battVoltage: e.target.value})} className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          </div>
        </div>

        {/* Workshop Tuning Log */}
        <div className="space-y-2 pt-3 border-t border-zinc-200 dark:border-zinc-800 text-xs">
          <h3 className="font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px]">Workshop Tuning Log</h3>
          <div className="grid grid-cols-3 gap-2">
            <input type="text" placeholder="mechanic" value={tuningLog.mechanic} onChange={(e) => setTuningLog({...tuningLog, mechanic: e.target.value})} className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 text-center focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
            <input type="text" placeholder="ECU Map" value={tuningLog.ecuMap} onChange={(e) => setTuningLog({...tuningLog, ecuMap: e.target.value})} className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 text-center focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
            <input type="text" placeholder="Accessories" value={tuningLog.acc} onChange={(e) => setTuningLog({...tuningLog, acc: e.target.value})} className="p-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 text-center focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
          </div>
        </div>

        {/* Billing Items */}
        <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider text-[10px] mb-2">Billing Items</h3>
          <div className="space-y-2 max-h-52 overflow-y-auto pr-1 border border-dashed border-zinc-200 dark:border-zinc-800 p-2 rounded">
            {items.map((item) => (
              <div key={item.id} className="p-3 bg-zinc-50 dark:bg-zinc-950/40 rounded border border-zinc-200 dark:border-zinc-800 space-y-2 relative">
                <input type="text" placeholder="Deskripsi Jasa / Part" value={item.desc} onChange={(e) => handleItemChange(item.id, 'desc', e.target.value)} className="w-full text-xs p-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" placeholder="Qty" value={item.qty || ''} onChange={(e) => handleItemChange(item.id, 'qty', parseInt(e.target.value) || 0)} className="text-xs p-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
                  <input type="number" placeholder="Harga Satuan" value={item.price || ''} onChange={(e) => handleItemChange(item.id, 'price', parseInt(e.target.value) || 0)} className="text-xs p-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition" />
                </div>
                {items.length > 1 && (
                  <button onClick={() => handleRemoveItem(item.id)} className="absolute top-1 right-2 text-zinc-400 hover:text-red-500 font-bold text-sm transition">×</button>
                )}
              </div>
            ))}
          </div>
          <button onClick={handleAddItem} className="mt-2 w-full py-1.5 bg-transparent border border-dashed border-zinc-300 dark:border-zinc-800 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 font-semibold text-xs rounded transition">+ Add Line Item</button>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleGenerateLink}
          disabled={subtotal === 0}
          className="w-full mt-4 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:bg-zinc-100 dark:disabled:bg-zinc-800 disabled:text-zinc-400 font-bold text-xs rounded transition uppercase tracking-wider shadow-sm"
        >
          {copied ? "✓ Link Copied!" : "🔗 Generate Shareable Link"}
        </button>
      </div>
    )}

    {/* INVOICE DISPLAY (Kanan): Dynamic Themes on Screen, Formally Crisp White on Print */}
    <div className="lg:col-span-7 w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-xl print:shadow-none print:border-none print:p-0 print:bg-white print:text-black">
      
      {/* Invoice Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6 print:border-zinc-200">
        <div>
          <h1 className="text-2xl font-black tracking-wider text-zinc-950 dark:text-white uppercase print:text-black">madz werkstätte</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-widest font-medium">High-Performance Engineering & Tuning</p>
        </div>
        <div className="mt-4 sm:mt-0 text-left sm:text-right">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide mb-2 ${status === 'PAID' ? 'bg-green-100 dark:bg-green-950/40 text-green-800 dark:text-green-400' : 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400'} print:bg-transparent print:p-0 print:text-sm print:text-black`}>
            ● {status || 'UNPAID'}
          </span>
          <p className="text-sm font-mono font-bold text-zinc-900 dark:text-zinc-200 print:text-black">{invoiceNo || 'MW-XXXXXXX'}</p>
          <p className="text-xs text-zinc-500 font-medium mt-0.5">{date}</p>
        </div>
      </div>

      {/* Info Metadata Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-6 text-sm print:border-zinc-200">
        <div>
          <h3 className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Customer</h3>
          <p className="font-bold text-zinc-900 dark:text-zinc-200 print:text-black">{customer.name || '-'}</p>
          <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs mt-0.5">{customer.phone || '-'}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Vehicle Ident</h3>
          <p className="font-bold text-zinc-900 dark:text-zinc-200 print:text-black">{vehicle.model || '-'}</p>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs font-mono mt-0.5">{vehicle.plateNo || '-'} • {vehicle.odometer || '-'}</p>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs font-mono mt-0.5">{vehicle.battVoltage || '-'}</p>
        </div>
        <div className="border border-zinc-200 dark:border-zinc-800 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950/30 print:bg-transparent print:border-zinc-300">
          <h3 className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Tuning Log</h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-700"><span className="font-bold text-zinc-400 dark:text-zinc-500">Map ID:</span> {tuningLog.ecuMap || '-'}</p>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-700 mt-0.5"><span className="font-bold text-zinc-400 dark:text-zinc-500">Acc:</span> {tuningLog.acc || '-'}</p>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 print:text-zinc-700 mt-0.5"><span className="font-bold text-zinc-400 dark:text-zinc-500">Mechanic:</span> {tuningLog.mechanic || '-'}</p>
        </div>
      </div>

      {/* Main Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-300 dark:border-zinc-700 text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest print:border-zinc-300">
              <th className="py-3 pl-2">Description / Part Item</th>
              <th className="py-3 text-center w-12">Qty</th>
              <th className="py-3 text-right w-32">Price</th>
              <th className="py-3 text-right w-32 pr-2">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-sm text-zinc-800 dark:text-zinc-300 print:divide-zinc-200 print:text-black">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition print:hover:bg-transparent">
                <td className="py-4 pl-2 font-medium text-zinc-900 dark:text-zinc-100 max-w-xs whitespace-normal break-words print:text-black">
                  {item.desc || '[ Empty Item ]'}
                </td>
                <td className="py-4 text-center font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-700">{item.qty}</td>
                <td className="py-4 text-right font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-700">
                  Rp {(item.price || 0).toLocaleString('id-ID')}
                </td>
                <td className="py-4 text-right font-mono font-bold text-zinc-950 dark:text-zinc-100 pr-2 print:text-black">
                  Rp {(item.qty * (item.price || 0)).toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Block & Disclaimers */}
      <div className="flex flex-col sm:flex-row justify-between items-start pt-4 border-t border-zinc-200 dark:border-zinc-800 print:border-zinc-300">
        <div className="mb-4 sm:mb-0 text-xs text-zinc-500 dark:text-zinc-400 max-w-sm print:text-zinc-500">
          <p className="font-bold text-zinc-800 dark:text-zinc-200 mb-1 uppercase tracking-wider text-[10px] print:text-black">Terms & Conditions:</p>
          <p className="leading-relaxed">Thank you for entrusting your vehicle to madz werkstätte. The warranty is valid for 60 business days from the date of vehicle delivery.</p>
        </div>
        <div className="w-full sm:w-64 text-sm divide-y divide-zinc-200 dark:divide-zinc-800 print:divide-zinc-200">
          <div className="flex justify-between py-3 text-zinc-950 dark:text-white font-black text-base print:text-black">
            <span className="uppercase tracking-wider text-xs text-zinc-400 dark:text-zinc-500">Grand Total</span>
            <span className="font-mono">Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="pt-2.5 text-xs text-left sm:text-right text-zinc-500 dark:text-zinc-400 print:text-zinc-600">
            Method: <span className="font-mono font-bold text-zinc-800 dark:text-zinc-200 print:text-black">{paymentMethod || '-'}</span>
          </div>
        </div>
      </div>

      {/* Print Button */}
      <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end print:hidden">
        <button 
          onClick={() => window.print()} 
          disabled={subtotal === 0} 
          className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:bg-zinc-100 dark:disabled:bg-zinc-800 disabled:text-zinc-400 font-bold text-xs rounded transition uppercase tracking-wider shadow-sm"
        >
          Print / Save PDF
        </button>
      </div>

    </div>
  </div>
</div>
  );
}

export default function NotaElektronik() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Systems...</div>}>
      <NotaContent />
    </Suspense>
  );
}