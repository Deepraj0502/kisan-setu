// src/app/discovery/page.tsx
import { Input } from "@/components/ui/input";
import { EquipmentCard } from "@/components/machinery/EquipmentCard";
import { Search, Mic } from "lucide-react";

export default function DiscoveryPage() {
  return (
    <main className="container mx-auto px-4 py-6">
      {/* Search and Voice Input */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 text-gray-400" />
        <Input 
          placeholder="Search tractors, pumps, or drones..." 
          className="pl-10 pr-10 h-12 text-lg"
        />
        <Mic className="absolute right-3 top-3 text-green-600 cursor-pointer" />
      </div>

      {/* Category Selection */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Tractors', 'Harvesters', 'Pumps', 'Drones', 'Ploughs'].map((cat) => (
            <div key={cat} className="flex-shrink-0 px-6 py-2 rounded-full border border-green-200 bg-green-50 text-green-700 font-medium cursor-pointer active:bg-green-600 active:text-white">
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Equipment List */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Available Near You</h2>
          <span className="text-sm text-green-600 font-medium">Filter by: 5km</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Data - This will be fetched from Spring Boot */}
          <EquipmentCard 
            name="John Deere 5050D" 
            category="Tractor" 
            price={500} 
            distance="2.4" 
            imageUrl="/tractor-sample.jpg"
          />
          {/* Add more cards here */}
        </div>
      </section>
    </main>
  );
}