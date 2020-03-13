import React, { Component } from 'react';

class Faqs extends Component {
    render () {
        return (
            <div>
                <div className="f3 mt-4" style={{color: 'white'}}>
		            <ol>
				 		<li><details><summary> Who is eligible?</summary>
								 <p>Anyone above 18yrs old and is earning money</p>
								</details>
				 		</li><br />
				 		<li><details><summary>What are the requirements?</summary>
								 <p>When you apply depending on the package,you will receive a mail from us. But no collateral required</p>
								</details>
				 		</li><br />
				 		<li><details><summary> How long does it take to process?</summary>
				 				<p>Within 24hrs.</p>
								 <p>Except some exceptional cases</p>
								</details>
				 		</li><br />
				 		<li><details><summary>What is the interest rate?</summary>
								 <p>Usually 5%. it can vary</p>
								</details>
				 		</li><br />
				 		<li><details><summary>How long can i pay back?</summary>
				 				<p>It depends on you.</p>
								 <p>But maximum loan duration is 12 months</p>
								</details> 
				 		</li>
				 	</ol>
		          </div>
            </div>
        )
    }
}

export default Faqs;