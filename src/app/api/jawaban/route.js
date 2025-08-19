import { supabase } from "../../../lib/supabaseClient";

export async function POST(req) {
  try {
    const { nama, jawaban } = await req.json();

    if (!nama || !jawaban) {
      return new Response("Field nama dan jawaban wajib diisi", { status: 400 });
    }

    const { error } = await supabase
      .from("hasil_kuis")
      .insert([{ nama, jawaban }]);

    if (error) {
      console.error(error);
      return new Response("Gagal simpan", { status: 500 });
    }

    return new Response("Berhasil disimpan", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("Bad Request", { status: 400 });
  }
}
