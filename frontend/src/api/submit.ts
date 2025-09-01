export interface ConsultationData {
  name: string;
  phone: string;
}

export interface ConsultationResponse {
  success: boolean;
  id?: number;
  message?: string;
}

export interface QuestionData {
  name: string;
  question: string;
}

export interface QuestionResponse {
  success: boolean;
  message?: string;
}

export async function submitConsultation(data: ConsultationData): Promise<ConsultationResponse> {
  try {
    const res = await fetch('/submit.php', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}

export async function submitQuestion(data: QuestionData): Promise<QuestionResponse> {
  try {
    const res = await fetch('/submit.php', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name:data.name, message:data.question, form_type: 'feedback' }),
    });
    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
