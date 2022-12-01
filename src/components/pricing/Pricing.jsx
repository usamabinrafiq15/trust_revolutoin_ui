import React from "react";
import "./Pricing.css";
const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="pricing_right">
          <div className="pricing_head">
            Pricing
            <div className="line_pricing"></div>
          </div>
          <div className="pricing_title">
            <div>Find the Package's</div>
            <div>That Suits Best for You.</div>
          </div>
          <div className="pricing_description">
            <p>
              The list below gives you the 1000 most frequently used English
              words in alphabetical order. Once you've mastered the shorter
              vocabulary lists, this is the next step. words in alphabetical
              order. Once you've mastered the shorter
            </p>
          </div>
          <div className="pricing_checks">
            <div className="side">
              <div className="pricing_side">
                <input type="checkbox" />
                <div className="checkbox_options"> We Are Different</div>
              </div>
              <div className="pricing_side">
                <input type="checkbox" />
                <div className="checkbox_options">
                  {" "}
                  Contrary To Popular Belief
                </div>
              </div>
              <div className="pricing_side">
                <input type="checkbox" />
                <div className="checkbox_options">
                  {" "}
                  Looked Up One Of the More{" "}
                </div>
              </div>
            </div>
            <div className="side2">
              <div className="pricing_side">
                <input type="checkbox" />
                <div className="checkbox_options"> We Are Different</div>
              </div>
              <div className="pricing_side">
                <input type="checkbox" />
                <div className="checkbox_options">
                  Contrary To Popular Belief
                </div>
              </div>
              <div className="pricing_side">
                <input type="checkbox" />
                <div className="checkbox_options">
                  {" "}
                  Looked Up One Of the More{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing_left">
          <div className="pricing_left_card_title">Free Credits</div>
          <div className="card_descriptions">
            <p>Looked Up One Of the More</p>
            <p>Looked Up the More</p>
          </div>
          <div className="card_rupee">
            <span className="sym">&#36;</span>
            <div className="rupee">100.00</div>
          </div>
          <div className="checkbox_button">
            <div className="button_big">
              <div>
                <input class="tgl tgl-light" id="cb1" type="checkbox" />
                <label class="tgl-btn" for="cb1"></label>
              </div>
              <div className="button_words">Lorem ipsum</div>
            </div>
            <div className="button_big">
              <div>
                <input class="tgl tgl-light" id="cb2" type="checkbox" />
                <label class="tgl-btn" for="cb2"></label>
              </div>
              <div className="button_words">Lorem ipsum</div>
            </div>
            <div className="button_big">
              <div>
                <input class="tgl tgl-light" id="cb3" type="checkbox" />
                <label class="tgl-btn" for="cb3"></label>
              </div>
              <div className="button_words">Lorem ipsum</div>
            </div>
         
          </div>
          <div className="experience">
            <span className="experience_button">Experience it!</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
