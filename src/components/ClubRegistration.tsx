import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Club } from "@/types";

interface ClubRegistrationProps {
  onRegister: (clubData: Omit<Club, "id" | "certificate" | "registeredBy" | "registrationDate" | "createdAt">) => void;
}

export function ClubRegistration({ onRegister }: ClubRegistrationProps) {
  const [formData, setFormData] = useState({
    name: "",
    district: "CHEMBE",
    localAuthority: "CHEMBE TOWN COUNCIL",
    ward: "",
    village: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Register New Club</h1>
        <p className="text-slate-600">Fill in the club details to register a new club</p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Club Information</CardTitle>
          <CardDescription>Enter the details of the club to be registered</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Club Name</Label>
              <Input
                id="name"
                placeholder="e.g. KAPEPULA WOMEN CLUB"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>District</Label>
                <Select value={formData.district} onValueChange={(value) => setFormData({ ...formData, district: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CHEMBE">CHEMBE</SelectItem>
                    <SelectItem value="KASAMA">KASAMA</SelectItem>
                    <SelectItem value="MPIKA">MPIKA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Local Authority</Label>
                <Input value={formData.localAuthority} readOnly className="bg-slate-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ward">Ward</Label>
                <Input
                  id="ward"
                  placeholder="e.g. KAPWEPWE"
                  value={formData.ward}
                  onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="village">Village</Label>
                <Input
                  id="village"
                  placeholder="e.g. KAPEPULA"
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Register Club
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}