import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactsById } from "@/app/api/contact";

async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const contact = await getContactsById(id);

  console.log("The contact to edit:", contact);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl text-gray-500 font-bold mb-6">
        Edit Contact
      </h1>

      <ContactForm
        action={updateContactAction}
        contact={contact}
      />
    </div>
  );
}

export default Page;