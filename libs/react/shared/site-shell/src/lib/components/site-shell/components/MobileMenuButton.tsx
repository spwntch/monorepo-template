import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type MobileMenuButtonProps = {
  onClick: () => void;
};

export const OpenMobileMenuButton = ({ onClick }: MobileMenuButtonProps) => (
  <button
    type="button"
    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    onClick={onClick}
  >
    <span className="sr-only">Open main menu</span>
    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
  </button>
);

export const CloseMobileMenuButton = ({ onClick }: MobileMenuButtonProps) => (
  <button
    type="button"
    className="-m-2.5 rounded-md p-2.5 text-gray-700"
    onClick={() => onClick()}
  >
    <span className="sr-only">Close menu</span>
    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
  </button>
);
