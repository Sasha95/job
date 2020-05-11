import { dataURItoBLOB } from "./dataURItoBLOB"

export interface IResponse {
  status: boolean
  message: string
}

export const sendResume = async (
  file: string,
  fileName: string | undefined,
  name: string,
  phone: string,
  message?: string
): Promise<IResponse> => {
  try {
    const body = new FormData()
    body.append("name", name)
    body.append("phone", phone)
    body.append("message", message)

    if (file) {
      body.append("file", dataURItoBLOB(file), fileName)
    }

    await fetch("https://dex-it.ru/Ru/Page/TechTaskEmail", {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
      },
      body,
    })
    return {
      status: true,
      message: "Спасибо! Мы ответим Вам в течение 45 мин!",
    }
  } catch (error) {
    return { status: false, message: error.message }
  }
}
