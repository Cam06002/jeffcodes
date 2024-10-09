import { FormData } from "./page";

export default function SendEmail(data: FormData){
  const apiEndpoint = '/contact';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}