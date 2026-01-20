import { createNavigation } from "next-intl/navigation";

import { routing } from "./config";

export const { usePathname, useRouter } = createNavigation(routing);
