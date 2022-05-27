import { toast } from "react-toastify"
import { APIStatus } from "@/types/api"

toast.configure()

interface INotify {
  (status: APIStatus, msg: string): void
}

export const notify: INotify = (status, msg) => {
  // Provide toastId to prevent duplicates
  // {
  //   toastId: "custom-id-yes",
  // }

  switch (status) {
    case "success":
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      })

      break

    case "error":
      toast.error(msg, {
        position: toast.POSITION.TOP_CENTER,
      })
      break

    default:
      break
  }
}
