import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ExampleModal2() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Bug Example 2 (click me)</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form>
          <Label htmlFor="name">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </form>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
        <div>Content</div>
      </DialogContent>
    </Dialog>
  );
}
