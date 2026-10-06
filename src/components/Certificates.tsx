import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Club } from "@/types";
import { useState } from "react";

interface CertificatesProps {
  clubs: Club[];
}

export function Certificates({ clubs }: CertificatesProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.certificate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Certificates</h1>
        <p className="text-slate-600">Generate and manage club certificates</p>
      </div>

      <Card className="border-0 shadow-sm mb-6">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Input
              placeholder="Search by club name or certificate number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700">Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Certificate Register</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Club Name</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Certificate No.</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">District</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClubs.map((club) => (
                  <tr key={club.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-medium text-slate-900">{club.name}</td>
                    <td className="py-3 px-4 text-emerald-600 font-medium">{club.certificate}</td>
                    <td className="py-3 px-4 text-slate-600">{club.district}</td>
                    <td className="py-3 px-4">
                      <Button variant="outline" size="sm">Print</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}