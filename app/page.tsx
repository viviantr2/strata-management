"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  const [maintenanceRequests, setMaintenanceRequests] = useState<string[]>([]);
  const [newRequest, setNewRequest] = useState("");

  const submitRequest = () => {
    if (newRequest.trim()) {
      setMaintenanceRequests([...maintenanceRequests, newRequest]);
      setNewRequest("");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Strata Management Dashboard</h1>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Maintenance Requests</h2>
          <Textarea
            value={newRequest}
            onChange={(e) => setNewRequest(e.target.value)}
            placeholder="Describe the issue..."
          />
          <Button onClick={submitRequest}>Submit Request</Button>
          <ul className="list-disc pl-5 space-y-2">
            {maintenanceRequests.map((request, index) => (
              <li key={index} className="border p-2 rounded-md">{request}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
