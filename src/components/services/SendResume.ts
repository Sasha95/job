import { dataURItoBLOB } from "./dataURItoBLOB"

export interface IResponse {
  status: boolean
  message: string
}

interface IRequest {
  file: string,
  fileName: string | undefined,
  name: string,
  contact: string,
  message?: string
}

export const sendResume = async ({
  file,
  fileName,
  name,
  contact,
  message
} : IRequest
): Promise<IResponse> => {
  try {
    const body = new FormData()
    body.append("name", name)
    body.append("contact", contact)
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
