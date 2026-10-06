import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Club, Member } from "@/types";

interface ReportsProps {
  clubs: Club[];
  members: Member[];
}

export function Reports({ clubs, members }: ReportsProps) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Reports</h1>
        <p className="text-slate-600">Generate and export institutional reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Club Register</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">Complete list of all registered clubs</p>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Members Register</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">Complete list of all club members</p>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Clubs by Ward</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">Clubs grouped by ward</p>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Clubs by Village</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">Clubs grouped by village</p>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Clubs by Date</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">Clubs grouped by registration date</p>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Certificate Report</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">All issued certificates</p>
            <Button variant="outline" className="w-full">Generate Report</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}