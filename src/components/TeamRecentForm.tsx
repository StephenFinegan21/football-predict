import React from "react";

type formProps = {
  form: string;
};

const TeamRecentForm = (props: formProps) => {
  const test = (str: string) => {
    let array = [];
    for (let i = 0; i < str.length; i++) {
      array.push(str.charAt(i));
    }
    return array;
  };

  return (
    <>
    <p>Recent Form (past - recent )</p>
    <div className="flex text-center justify-center my-4">
      {test(props.form).map((result, index) =>
      
        result === "W" ? (
          <p   key={index}  className="bg-emerald-400 rounded-full w-4 h-4 mx-1"></p>
        ) : result === "D" ? (
          <p   key={index} className=" bg-yellow-400 rounded-full w-4 h-4 mx-1"></p>
        ) : (
          <p   key={index} className=" bg-rose-400 rounded-full w-4 h-4 mx-1"></p>
        )
      )}
    </div>
    </>
  );
};

export default TeamRecentForm;
