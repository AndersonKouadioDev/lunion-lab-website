"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@heroui/react";
import LoadImage from "./image-dowload";
import HomeTitle from "../home/HomeTitle";

const ContactForm = () => {
  const { toast } = useToast();
  const [learnMoreForm, setLearnMoreForm] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [projectForm, setProjectForm] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleLearnMoreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons bientôt.",
    });
    console.log("Learn more form:", learnMoreForm);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de projet envoyée !",
      description: "Notre équipe vous contactera sous peu.",
    });
    console.log("Project form:", projectForm);
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
       <div className="flex">
         <HomeTitle text=" Contacts" imageSrc={'/assets/images/vectors/vector_message.svg'} className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8"/>
       </div>
         


        <Tabs defaultValue="learn-more" className="w-full">
        <TabsList className="grid grid-cols-2 w-full   bg-white mb-8  lg:rounded-br-full gap-2 sm:gap-0 lg:gap-3">
  <TabsTrigger
    value="learn-more"
    className="data-[state=active]:bg-primary font-bold text-sm sm:text-lg md:text-xl font-figtree 
              p-3 rounded-l-full lg:rounded-t-full lg:rounded-bl-full text-white bg-[#B3B3B3] cursor-pointer data-[state=active]:text-white"
  >
    En savoir plus
  </TabsTrigger>

  <TabsTrigger
    value="start-project"
    className="data-[state=active]:bg-primary font-bold text-sm sm:text-lg md:text-xl font-figtree 
              p-3 rounded-r-full lg:rounded-t-full lg:rounded-br-full text-white bg-[#B3B3B3] cursor-pointer data-[state=active]:text-white"
  >
    Démarrer un projet
  </TabsTrigger>
</TabsList>



          {/* ---------- FORMULAIRE LEARN MORE ---------- */}
          <TabsContent value="learn-more">
            <Card className="p-4 sm:p-6 md:p-8">
              <form
                onSubmit={handleLearnMoreSubmit}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
              >
                <div className="md:col-span-1 space-y-4">
                  <Input
                    placeholder="Nom et prénom"
                    value={learnMoreForm.name}
                    onChange={(e) =>
                      setLearnMoreForm({ ...learnMoreForm, name: e.target.value })
                    }
                    className="bg-[#626262] p-4 sm:p-6 text-white placeholder:text-input-placeholder 
                               border-none rounded-br-full rounded-t-full w-full"
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Email*"
                    value={learnMoreForm.email}
                    onChange={(e) =>
                      setLearnMoreForm({ ...learnMoreForm, email: e.target.value })
                    }
                    className="bg-[#626262] p-4 sm:p-6 text-white placeholder:text-input-placeholder 
                               border-none rounded-br-full rounded-t-full w-full"
                    required
                  />

                  <Input
                    type="tel"
                    placeholder="Téléphone"
                    value={learnMoreForm.phone}
                    onChange={(e) =>
                      setLearnMoreForm({ ...learnMoreForm, phone: e.target.value })
                    }
                    className="bg-[#626262] p-4 sm:p-6 text-white placeholder:text-input-placeholder 
                               border-none rounded-br-full rounded-t-full w-full"
                  />
                </div>

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Message"
                    onChange={(e) =>
                      setLearnMoreForm({
                        ...learnMoreForm,
                        message: e.target.value,
                      })
                    }
                    className="bg-[#626262] text-white border-none h-40 sm:h-48 
                               rounded-br-3xl rounded-t-3xl resize-none w-full"
                    required
                  />
                </div>

                <div className="md:col-span-3 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 items-start sm:items-center mt-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <Checkbox>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                    </Checkbox>{" "}
                    J'accepte le traitement de mes données
                    personnelles
                  </p>
                  <Button
                    type="submit"
                    className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                  >
                    Envoyer le message
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>

          {/* ---------- FORMULAIRE START PROJECT ---------- */}
          <TabsContent value="start-project">
            <Card className="p-4 sm:p-6 md:p-8">
              <div className="mb-6 flex flex-col sm:flex-row sm:justify-between gap-4">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Souhaitez-vous nous en informer ? Téléchargez vos fichiers ?
                </p>
                <div className="flex items-center gap-4 sm:gap-6 justify-center text-xs sm:text-sm text-muted-foreground">
                  <span className="w-6 h-6 flex items-center justify-center bg-primary rounded">
                    <LoadImage />
                  </span>
                  <p>
                    Taille max : 5 Mo. <br className="sm:hidden" /> Format : PDF
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleProjectSubmit}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
              >
                <div className="md:col-span-1 space-y-4">
                  <Input
                    placeholder="Nom et prénom"
                    value={projectForm.name}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, name: e.target.value })
                    }
                    className="rounded-br-full rounded-t-full bg-[#626262] p-4 sm:p-6 
                               text-white placeholder:text-input-placeholder border-none w-full"
                    required
                  />

                  <Input
                    type="email"
                    placeholder="Email*"
                    value={projectForm.email}
                    onChange={(e) =>
                      setProjectForm({ ...projectForm, email: e.target.value })
                    }
                    className="rounded-br-full rounded-t-full bg-[#626262] p-4 sm:p-6 
                               text-white placeholder:text-input-placeholder border-none w-full"
                    required
                  />

                  <Input
                    placeholder="Entreprise"
                    value={projectForm.company}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        company: e.target.value,
                      })
                    }
                    className="rounded-br-full rounded-t-full bg-[#626262] p-4 sm:p-6 
                               text-white placeholder:text-input-placeholder border-none w-full"
                  />
                </div>

                <div className="md:col-span-2">
                  <Textarea
                    placeholder="Message"
                    value={projectForm.message}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        message: e.target.value,
                      })
                    }
                    className="rounded-br-3xl rounded-t-3xl bg-[#626262] text-white 
                               border-none h-40 sm:h-48 resize-none w-full"
                    required
                  />
                </div>

                <div className="md:col-span-3 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 items-start sm:items-center mt-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <Checkbox>
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                    </Checkbox>{" "}
                    J'accepte le traitement de mes données
                    personnelles
                  </p>
                  <Button
                    type="submit"
                    className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto"
                  >
                    Envoyer le contact
                  </Button>
                </div>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContactForm;
