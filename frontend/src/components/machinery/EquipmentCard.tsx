// src/components/machinery/EquipmentCard.tsx
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EquipmentProps {
  name: string;
  category: string;
  price: number;
  distance: string;
  imageUrl: string;
}

export function EquipmentCard({ name, category, price, distance, imageUrl }: EquipmentProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={name} className="h-48 w-full object-cover" />
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          <p className="text-primary font-bold">₹{price}/hr</p>
        </div>
        <div className="flex items-center mt-3 text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" /> {distance} km away
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" className="flex-1">
          <MessageCircle className="w-4 h-4 mr-2" /> Message
        </Button>
        <Button className="flex-1 bg-green-600 hover:bg-green-700">
          <Phone className="w-4 h-4 mr-2" /> Call
        </Button>
      </CardFooter>
    </Card>
  );
}