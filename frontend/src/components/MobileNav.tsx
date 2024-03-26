import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetDescription } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";


const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to GoFood.com !</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
        <button className="flex-1 font-bold bg-orange-500">Log In</button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
