
interface HandleChangeProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  type: string;
}


const Input: React.FC<HandleChangeProps> = ({ handleChange, name, label, type  }) => {
  return (
    <label className="block">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 
        block text-sm font-medium text-slate-700"
      >
        { label }
      </span>
      <input  
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
        placeholder-slate-400 focus:outline-none focus:border-sky-500 
        focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        type={type}
        name={name}
        // placeholder="you@example.com" 
        onChange={handleChange}
      />
    </label>
  )
}

export default Input
