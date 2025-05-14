"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function UnderConstructionDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show the dialog on first render
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>🚧 Site Under Construction</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground">
          We’re currently working on this website to improve your experience.
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
