import { CgHello } from "react-icons/cg";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        <CgHello />
        Hello world!
      </h1>
      <div className="join">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </div>
    </>
  );
}
