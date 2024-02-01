import { composeClassName } from "../../../utils";

export const NavItem = ({
  label,
  verticalMenu,
}: {
  label: string;
  verticalMenu?: boolean;
}) => (
  <a
    href="#"
    className={composeClassName(
      verticalMenu
        ? '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
        : 'text-sm font-semibold leading-6 text-gray-900'
    )}
  >
    {label}
  </a>
);
