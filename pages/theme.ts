import { CustomFlowbiteTheme } from "flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme";

export const customtheme: CustomFlowbiteTheme = {
  tab: {
    tablist: {
      styles: {
        pills: "flex-wrap text-sm font-helvetica text-white dark:text-gray-400",
      },
      tabitem: {
        styles: {
          pills: {
            active: {
              base: "",
              on: "rounded-lg bg-[#B469EF] font-helvetica text-white",
              off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
            },
          },
        }, 
      },
    },
  },
};
