type Variant = "success" | "warning" | "error";

export interface Toaststate {
  Title: string;
  Description: string;
  Varaint: Variant;
}

const VaraintStyle = {
  success: { Icon: "", color: "" },
  warning: { Icon: "", color: "" },
  error: { Icon: "", color: "" },
};
