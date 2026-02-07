import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "../../config/site";
import logo from "@assets/garola_logo_white.webp";

export default function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50 lg:hidden" />

        <Dialog.Content className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-[#14171A] border-b border-slate-700/30 max-h-[90vh] overflow-y-auto">
          {/* Header interno */}
          <Dialog.Title className="flex items-center justify-between px-6 border-b border-slate-700/30">
            <img
              src={logo.src}
              alt="Garola Inoxidable"
              className="h-20 w-20 object-contain"
            />
            <Dialog.Close asChild>
              <button className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg">
                <X className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </Dialog.Title>

          {/* Links */}
          <div className="px-6 py-6 space-y-1">
            {NAVIGATION.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-4 text-lg font-medium uppercase text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              </Dialog.Close>
            ))}

            {/* CTA */}
            <div className="pt-6">
              <Dialog.Close asChild>
                <a
                  href="/rfq"
                  className="block w-full text-center px-6 py-3 text-sm font-semibold uppercase
                             text-white bg-[#DC2828] hover:bg-[#DC2828]/90 shadow-md transition-all"
                >
                  Cotizar
                </a>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
