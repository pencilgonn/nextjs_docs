import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { cn } from "@/lib/utils";

type Props = {
  trigger?: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  closeable?: boolean;
} & React.ComponentPropsWithoutRef<typeof DialogContent>;

const Modal: React.FC<Props> = ({
  open,
  setOpen,
  closeable,
  trigger,
  children,
  ...props
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen && setOpen(!open)}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent closeable={closeable} {...props}>
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
