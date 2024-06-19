import React from "react";

// Salary range component

interface Step3Props {
  previousStep: () => void;
  formData: { salary: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  errors: Record<string, string>;
}

const Step3: React.FC<Step3Props> = ({
  previousStep,
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="px-72 my-8">
        <div className="form-wrapper border-2">
          <div className="form-group border-2">
            <label htmlFor="salary" className="">
              Salary range
            </label>
            <div className="salary-wrapper flex flex-col">
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary1"
                  value="0-1000"
                  checked={formData.salary === "0-1000"}
                  onChange={handleChange}
                />
                0-1000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary2"
                  value="1000-2000"
                  checked={formData.salary === "1000-2000"}
                  onChange={handleChange}
                />
                1000-2000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary3"
                  value="2000-3000"
                  checked={formData.salary === "2000-3000"}
                  onChange={handleChange}
                />
                2000-3000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary4"
                  value="3000-4000"
                  checked={formData.salary === "3000-4000"}
                  onChange={handleChange}
                />
                3000-4000
              </label>
              <label>
                <input
                  type="radio"
                  name="salary"
                  id="salary5"
                  value=">4000"
                  checked={formData.salary === ">4000"}
                  onChange={handleChange}
                />
                Mehr als 4000
              </label>
            </div>
            {errors.salary && <p className="text-red-500"> {errors.salary}</p>}
          </div>
          <button type="button" onClick={previousStep} className="border-2">
            {" "}
            back{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default Step3;
