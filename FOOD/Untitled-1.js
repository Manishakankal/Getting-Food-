import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FoodPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-red-200 p-6">
      <header className="text-center text-4xl font-extrabold text-red-600 mb-8">Gourmet Creations</header>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {["/food1.jpg", "/food2.jpg", "/food3.jpg"].map((src, index) => (
          <Card key={index} className="rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform">
            <img src={src} alt={`Dish ${index + 1}`} className="w-full h-56 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">{["Signature Pasta", "Exotic Salad", "Decadent Dessert"][index]}</h3>
              <p className="text-gray-700 mt-2">{["A rich blend of homemade pasta with organic ingredients.", "A delightful mix of fresh greens, nuts, and dressing.", "An indulgent chocolate masterpiece for sweet lovers."][index]}</p>
              <Button className="mt-4 bg-red-500 text-white hover:bg-red-700">View Recipe</Button>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
