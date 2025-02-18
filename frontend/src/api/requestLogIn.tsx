import { z } from "zod";
import { API_URL } from "./API_URL";
import { formSchema } from "@/components/login/LoginForm";

/*******************
 *    로그인
 *******************/
export async function requestLogIn(
    formData: z.infer<typeof formSchema>
) {

  const requestUrl = `${API_URL}/user/login`;

  const signUpResponse = await fetch(requestUrl, {
    method: 'POST',
    credentials : 'include',
    headers: {
        Accept: 'application/json','Content-Type': 'application/json',
        // "Authorization": `Basic ${window.btoa(`${formData.email}:${formData.password}`)}`
      },
      body: JSON.stringify(formData),
  });
  return signUpResponse;
}