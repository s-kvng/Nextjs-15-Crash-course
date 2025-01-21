import React from "react";

export async function generateMetadata({ params }: never) {
  const { id } = params;
  // fetch some data with id
  console.log(id);
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div>User details page {id}</div>;
};

export default page;
