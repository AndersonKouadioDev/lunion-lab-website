'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { TextArea } from "@heroui/react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    accepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-workflow-bg/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="workflow-decoration">C</span>
          <span className="text-workflow-text">ontacts</span>
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button 
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            En savoir plus sur LUNION-LAB
          </Button>
          <Button 
            variant="secondary"
            className="rounded-full px-6"
          >
            Démarrer un projet
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Nom et prénom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted border-0 h-12 rounded-lg"
              />
            </div>

            <div className="md:row-span-4 space-y-2">
              <TextArea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-muted border-0 h-full min-h-[280px] rounded-lg resize-none"
              />
            </div>

            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Adresse mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted border-0 h-12 rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-muted border-0 h-12 rounded-lg"
              />
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={formData.accepted}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, accepted: checked as boolean })
              }
              className="mt-1"
            />
            <Label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
            >
              J'accepte le traitement de mes données personnelles.
            </Label>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Envoyer le message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
