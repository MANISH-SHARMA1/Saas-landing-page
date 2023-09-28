import React, { useState } from "react";
import "./Faq.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";

function Faq() {
  const [answer, setAnswer] = useState(false);
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);

  function aanswer() {
    // Here, if the answer is false then it gets true and if it is true it gets false.
    setAnswer(!answer);
  }
  function aanswer1() {
    // Here, if the answer is false then it gets true and if it is true it gets false.
    setAnswer1(!answer1);
  }
  function aanswer2() {
    // Here, if the answer is false then it gets true and if it is true it gets false.
    setAnswer2(!answer2);
  }
  function aanswer3() {
    // Here, if the answer is false then it gets true and if it is true it gets false.
    setAnswer3(!answer3);
  }
  function aanswer4() {
    // Here, if the answer is false then it gets true and if it is true it gets false.
    setAnswer4(!answer4);
  }
  function aanswer5() {
    // Here, if the answer is false then it gets true and if it is true it gets false.
    setAnswer5(!answer5);
  }

  return (
    <>
      {/* FAQ's component */}
      <div className="faqs">
        <h1 id="h1">Frequently Asked Questions(FAQ's)</h1>
        <div className="questions">
          <div className="question">
            <p>What is Netflix? </p>
            {/* If answer is true it shows minus button and if false it shows plus button */}
            <span onClick={aanswer}>
              {answer ? <BiSolidMinusCircle /> : <BsPlusCircleFill />}
            </span>
          </div>
          {/* If answer is true then this block of code gets executed otherwise it'll not get executed. */}
          {answer && (
            <div>
              {" "}
              <p id="answer">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <div className="question">
            <p>How much does Netflix cost?</p>
            <span onClick={aanswer1}>
              {answer1 ? <BiSolidMinusCircle /> : <BsPlusCircleFill />}
            </span>
          </div>
          {answer1 && (
            <div>
              <p id="answer">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <div className="question">
            <p>Where can I watch?</p>
            <span onClick={aanswer2}>
              {answer2 ? <BiSolidMinusCircle /> : <BsPlusCircleFill />}
            </span>
          </div>
          {answer2 && (
            <div>
              <p id="answer">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <div className="question">
            <p>How do I cancel?</p>
            <span onClick={aanswer3}>
              {answer3 ? <BiSolidMinusCircle /> : <BsPlusCircleFill />}
            </span>
          </div>
          {answer3 && (
            <div>
              <p id="answer">
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <div className="question">
            <p>Is Netflix good for kids?</p>
            <span onClick={aanswer4}>
              {answer4 ? <BiSolidMinusCircle /> : <BsPlusCircleFill />}
            </span>
          </div>
          {answer4 && (
            <div>
              <p id="answer">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
              </p>
            </div>
          )}
        </div>
        <div className="questions">
          <div className="question">
            <p>What can I watch on Netflix? </p>
            <span onClick={aanswer5}>
              {answer5 ? <BiSolidMinusCircle /> : <BsPlusCircleFill />}
            </span>
          </div>
          {answer5 && (
            <div>
              <p id="answer">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Faq;
