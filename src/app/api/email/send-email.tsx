import { FormData } from "../../contact/page";

export default function SendEmail(data: FormData){
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    // .then((response) => {
    //   alert(response.message);
    // })
    .catch((err) => {
      alert(err);
    });
}