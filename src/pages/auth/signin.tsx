import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { signIn, getProviders } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const providers = await getProviders();


  if (session) {
    return { redirect: { destination: '/' } };
  }
  return {
    props: { providers: providers ?? [] },
  };
}


const SignIn = ({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <>
    <h1 className="bg-emerald-300 text-center text-2xl">Custom Sign in Page</h1>

    {
      Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-2 bg-emerald-500 rounded-md m-2" onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))
    }
  </>
);

export default SignIn;
