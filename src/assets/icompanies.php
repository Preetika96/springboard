<?php
include_once 'includes/db_connect.php';
include_once 'includes/functions.php';

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta lang="en">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Placement Cell Jai Hind College</title>
	<link rel="icon" type="icon/png" href="includes/img/logo.png">
	<link rel="stylesheet" type="text/css" href="includes/css/mysheet.css">
	<script type="text/javascript" src="includes/js/jquery.min.js"></script>
	<script type="text/javascript" src="includes/js/jquery-1.7.1.js"></script>
	<script type="text/javascript"> 
		$(document).ready(function(){
			$("#select-menu").click(function(){
				$("#mobile").slideToggle("slow");
			});
		});
	</script>
</head>
<body><div id="container"> 
	<header>
		<section id="title">
			<a href="index.html"><img src="includes/img/logo.png" /></a>
			<a href="index.html"><h4>Placement Cell Jai Hind College</h4></a>
		</section>
		<section id="nav">
			<nav>
				<ul>
					<li><a href="announcements.html">Announcements</a></li>
					<li><a href="opportunities.php">Placements</a></li>
					<li><a href="internships.html">Internships</a></li>
					<li><a href="help.php">Help</a></li>
				</ul>
			</nav>
		</section>
	</header>

	<div id="header">
		<section id="title-mobile">
			<img src="includes/img/logonew.gif" />
			<h4 align="center">Placement Cell Jai Hind College</h4>
		</section>
		<section id="select-menu">
			<li><a>Menu</a></li>
		</section>
		<div id="mobile">
			<center>
				            <table>
                <tr>
                    <td><a href="announcements.html">Announcements</a></td>
                </tr>
                <tr>
                    <td><a href="opportunities.php">Placements</a></td>
                </tr>
                <tr>
                    <td><a href="internships.html">Internships</a></td>
                </tr>
                <tr>
                    <td><a href="help.php">Help</a></td>
                </tr>
            </table>
			</center>
		</div>
	</div>

<section id="main">

<?php if($_GET['c']=='blueprismcapital') : ?>
	<section class="content">
	<hr><h1>Blue Prism Capital </h1><hr>
	<section class="company-details">
	<label>About Us:</label>
	<p>Interns Needed for Blue Prism Capital (Marketing and Initial Training for Creating Automated Trading Systems)<br><br>
The inter will go through an in-house training course, which lays a foundation for prospective clients who want to trade futures as their preferred asset class or as part of a multi-asset trading strategy. It provides an overview of the five major groups of US futures markets—Index Futures, Commodities, Forex and the unique characteristics of each .The intern will gain a strategic edge by combining powerful skill-building lessons and hands-on live market trading sessions.  As a result, we will rely on the individual to cultivate and maintain our off-shore clients on our automated trading platform. No heavy math or advanced economics is required.
	</p><br>
<ol>
<li>Input and update new and current client information in all required systems
<li>Assist with preparing necessary documentation such as spreadsheets, cover letters, etc.
<li>Provide necessary administrative support to the sales team.
<li>Assist with preparing documents to market renewal business.
<li>Develop email marketing campaigns with A/B testing, comparing different tactical approaches, which result in increase of open accounts/customers
<li>Help develop training platforms across multiple disciplines, energized large groups of people and clients
	</ol>
	</section>
</section><?php endif;?>



	<?php if($_GET['c']=='cbmindia') : ?>
	<section class="content">
	<hr><h1>CBM India</h1><hr>
	<section class="company-details">
	<label>About Us:</label>
<p>CBM is a well established educational company with a range of innovative, technology-enabled products and solutions designed exclusively for schools and colleges. Today, at CBM we are catering to lakhs of students across hundreds of schools through our various educational services.</p>

<label>Minimum qualification:</label> 
<p>Under-graduate students</p>
<label>Job Description:</label> 
<p>Internship</p>
<label>Requirements:</label> 
<p>Marketing, Digital Marketing, Quality Content Analyst, Content writer, Content Developer and Web Designer</p>

<p>Attached herewith is the document describing the same.
<br>Last date to register- 20th August 2018
<br>If you have any queries, kindly contact :
<br>Ms. Janice Do Rosario
<br>+91-7387011399</p>
</section>
</section><?php endif;?>

	<?php if($_GET['c']=='shoppermb') : ?>
	<section class="content">
	<hr><h1>ShopperMB.com</h1><hr>
	<section class="company-details">
	<label>About Us:</label>
<p>ShopperMB.com is India's best website to find the best offers and deals online. It is India's number 1 site. ShopperMB is a one-stop destination for all the deals, offers, coupons and promo codes throughout the net.</p><br><br>

<label>Role:</label><p>Digital Marketing.</p><br><br>
<label>Job Description:</label>
<ul>
<li>Work with the on-site Social Media team to create and implement campaigns.
<li>Develop monthly calenders on a weekly and monthly basis for a company brands.
<li>Monitor analytics with social media team  to identify viable ideas.
<li>Create engaging blog and social media content.
<li>Provide support to our marketing team at live and online events.
</ul>
<label>Internship Period:</label><p> 3 to 6 months</p><br><br>
<label>Stipend:</label> <p>Incentive based</p><br><br>
<label>Work Venue:</label><p>Mumbai and Remotely work.</p><br><br>
<label>Benefits:</label>
<ol>
<li>Internship experience Certified Letter.
<li>Learning market and e-commerce domain.
<li>Flexible timing.
<li>5 days a week
<li>Remotely Work and No Travelling.
</ol>
<br><br>
<p>You can directly mail resume at info@shoppermb.com or apply on the following page</p><br>
<a href="https://www.shoppermb.com/career">ShopperMB.com</a>
</section>

		</section><?php endif;?>



	<?php if($_GET['c']=='ynfx') : ?>
	<section class="content">
	<hr><h1>YnFx</h1><hr>
	<section class="company-details">
	<label>About Us:</label>
	
	
<p>YnFx is the world's premier and most trusted market information initiative, with a mission to provide companies in global textile markets a competitive edge by delivering authentic and timely pricing data and high-value market analysis. We have over 20 years experience in providing pricing information, news, analysis and customised reports on various textile value chains to various stake holders. </p>


<label>Internships</label>
<p> The internship oﬀers and unique opportunity to work with one of the earliest Tech Startups in the country. The role requires to research the industry, potential markets, key customers and market trends. And further present marketing strategy and assist in campaign building.</p>
<label>Duration</label><p>3 to 6 months</p> 
<label>Timing</label> <p>Minimum 4 hrs a day or a total of 20 hrs a week</p> 
<label>Stipend</label> <p>INR 7500</p>
<label>Address and Location:</label>
<p>YNFX.com 2 nd Floor Doulatram Mansion,<br>Salgaonkar Road, Colaba,<br>Mumbai, 400 005 India<br>Contact Details - +91 77188 80355</p>

</section>

		</section><?php endif;?>
	
	
	
	<?php if($_GET['c']=='timesinternet') : ?>
	<section class="content">
	<hr><h1>Times Internet</h1><hr>
	<section class="company-details">
	<label>About Us:</label>
<p>Times Internet is the largest Indian Internet Network and the digital venture of Times of India, India's
largest media and entertainment group. TIL reaches over 250+ million unique visitors a month who
collectively account for 30 billion page views and 30 billion minutes spent across web and mobile, with
businesses across news, entertainment, sports, local, e-commerce, classifieds, startup investments, local
partnerships, and more.</p><br><br>

<p>This role is for a global digital video company (Subsidiary/ Acquired by Times) that is building a product
and technological organization in the country. It is the 2nd largest video product in the world (based on
DAUs). This is a critical and high visibility project.</p>
<label>Requirements:</label>
<ol>
<li>Content Ingestion: You will be responsible for ingestion of content acquired from publishing
houses/vendors into our CMS platform.
<li>Content Management: You will be organizing content based upon the product requirements to
be displayed on the respective platforms. You will also be optimizing the content organization
based on the performance data.
<li>Product Growth and Analytics: You will be responsible for improving the user engagement via
notifications. You will be performing a variety of AB tests to improve the user engagement. You
will be responsible for monitoring KPIs and other performance metrics to provide insights about
user behavior and providing feedback to product team.
<li>Stakeholder Support operations: You will be providing support to developer teams ranging from
Machine Learning, Search, Personalization and many more. You will be providing them with key
insights into user behavior.
</ol>
<label>Qualifications:</label>
<ul>
<li>Pursuing a Bachelors or Masters Degree
<li>Be a native speaker of either Hindi, Tamil, Telugu, Bhojpuri with a strong command over written
and oral English.
<li>Experience with content creation will be preferred but not mandatory
<li>Have passion, energy, accountability and desire to excel
<li>Meticulous, patient, multitasker and a strong sense of responsibility
</ul>
<p>Mail your queries or details to rinee.rajeev@timesinternet.in</p>

</section>

		</section><?php endif;?>
	<?php if($_GET['c']=='credence') : ?>
	<section class="content">
			<hr><h1>Credence Analytics</h1><hr>
			<section class="company-details">
			<label>About Internship:</label><p>Job Title: Intern (Software Implementation)<br>
       Reports To: Lead/Manager Software Implementation<br>
Region: India<br>
Grade: NA </p>
<label>Job Purpose:</label>
<p>Intern Software Implementation would be involved in any/few of the activities related to end to end implementation of software at client locations and backend issue resolution for implementation activities.</p>
<label>Duties and Responsibilities</label>
<ul>
<li>Conducting Workshops for Clients
<li>Conducting Demos at client location
<li>UAT (User Acceptance Test)
<li>Data Migration
<li>User Training
<li>Go-Live, etc
	</ul>
<label>Qualifications</label>
<ul>
<li>Education: Graduation-B.Com+IT Certification/B.Sc-IT/B.ScCompSc./B.ScIT/BE-IT/BE-Comps
<li>Technical Skills: VB,Oracle,SQL
<li>Skills: Client Management, Project Management, Good Communication
<li>Duration: 3-6 Months
<li>Stipend: Rs.8000/-pm
<li>Reviewed: Tuesday,10 July,2018
	</ul>
<br><br>
<hr><br><br>
<label>About Internship:</label>
<p>Job Title: Intern (Support)
Reports To: Lead/Manager Software Developer<br>
Region: India<br>
Grade: NA<br>
	</p>
<label>Job Purpose:</label>
<p>Intern (Software Support) role would be involved in technical support on our products. The role may require to indulge in activities to resolve technical issues by debugging and identify the cause.Rectify the issue with help of senior and provide the resolution to L1 calls.</p>
<label>Duties and Responsibilities:</label>
<ul>
<li>Technical Support on our Products
<li>Debugging of errors
<li>Good Analytical skill
<li>Provide help to resolve the L1 calls
<li>Involve in Version control and patch releasing mechanism.
</ul>
<label>Qualifications</label>
<ul>
<li>Education: Graduation - B.Com+IT Certification/B.Sc-IT/B.ScComp Sc./BE-IT/BE-Comps, PostGraduation - MCA/ MSc IT/Comps(notmandatory)
<li>Technical Skills: ORACLE SQL/PL SQL,JAVA,Javascript,HTML,sound knowledge of PL/SQL script
<li>Soft Skills: Good Communication
<li>Duration: 3 to 6 Months
<li>Stipend: Rs.8000/-pm
<li>Reviewed: Monday,9 July,2018
</ul>
<br><br>
<hr><br><br>
<label>About Internship:</label>
<p>Job Title: Intern (S/W Developer)<br>
Reports To: Consultant/Lead Software Developer<br>
Region: Mumbai<br>
Grade: NA</p>
<label>Job Purpose:</label>
<p>Intern (S/W Developer) would be involved in activities of developing front end web app modules to be used in the financial softwares made by Credence Analytics.</p>
<label>Duties and Responsibilities:</label>
<ul> 
<li>Understand the specifications provided by seniors
<li>Provide prompt solution on the specifications shared
</ul>
<label>Qualifications:</label>
<ul>
<li>Education: Graduation - BSc.(IT/CS),BCA,B.E.(IT/CS), Post Graduation - MSc.(IT/CS),MCA (notmandatory)
<li>Technical Skills: HTML5,CSS,Bootstrap,Javascript,JQuery,NodeJS,JAVA
<li>Soft Skills: Good Communication skills,Willingness to learn new concepts,Good grasping skills
<li>Duration: 3 to 6 Months
<li>Stipend: Rs.8000/-pm
<li>Reviewed: Monday,2July,2018
</ul>

	</section><?php endif;?>

	<?php if($_GET['c']=='soliaura') : ?>   
		<section class="content">
			<hr><h1>Soliaura Ingredients</h1><hr>
			<section class="company-details">
<label>About Internship:</label><br>
<p>Business: Internship Program<br>
Department: Market Analyst Intern<br>
Expected: 2<sup>nd</sup> year of Bachelor’s Degree, working with college<br>
Location: New Marine Lines, Mumbai Employment<br>
Type: Full time (negotiable)<br><br>
Soliaura Ingredients is one of the biggest B2B SELLERS of Organic food in the USA. Opening its B2C
branch we are having major corporate programs for students and an opportunity to travel with us to our
USA market. A Market Analyst Intern will ideally spend 3-6 months with Soliaura and learn to grow
market through numbers. The company’s progress is a reflection of the rapid increase in the bilateral
relations between India and the international food.<br><br>
<label>Responsibilities and tasks</label>
<ul>
<li>Planning, implementation and cliental growth analysis, culture, information, marketing and
public diplomacy activities in accordance with the strategic planning skills with Soliaura.
<li>Manage Soliaura inland and international Marketing for the food, and assist managers in charge
<li>Produce and maintain information at Soliaura
<li>Daily monitoring, studying and actualizing studies of Soliaura Market in the USA.
</ul>
<label>Qualifications</label>
<ul>
<li>Minimum 1year of under-graduate study from University within the areas of responsibilities and
tasks. Relevant working experience may compensate for a lack of degree
<li>Fluent in written and spoken English, knowing a foreign language is an advantage
<li>Is ready to learn and enthusiastic to grow along with the company
<li>Content writing, Graphic designing or SMM skill is a perk
<li>Will get guidance in Brand management and Brand placement into international shores.
</ul>
<label>Personal skills</label>
<ul>
<li>Proven ability to building networks with relevant organizations.
<li>Honesty, integrity, tolerance and respect for all individuals across social and professional
distinctions
<li>Openness, transparency and good communication skills are essential.
<li>Ability to work independently as well as in a team setting.
<li>Willing to learn, explore and grow.
	</ul>
</p><br>
                
 </section><?php endif;?>
	<?php if($_GET['c']=='cybernetiv') : ?>   
		<section class="content">
			<hr><h1>CYBERNETIV</h1><hr>
			<section class="company-details">
<label>About Internship:</label><br>
<p>We are CYBERNETIV, an Information Technology Service company that specializes in Cyber Security located in Fort, Mumbai.
Cybernetiv was established to mitigate the escalating cyber security risk facing organizations all over the world. We take a proactive approach towards information security through a tripartite methodology of establishing security policies within an organization, configuration of cutting-edge firewalls on the application and network layers, and training of personnel within an organization regarding security best practices.

<br><br>
We are looking for energetic, intelligent and hardworking individuals interested in the field of cyber security for the role of Business Development/Marketing Intern
<br><br>
The Internship will be for a period of 3 months

All other details will be discussed at the time of interview

<br><br>

Contact- 9769220404
<br><br>
<a href="https://www.cybernetiv.com//">www.cybernetiv.com</a><br><br>
</p><br>
                
 </section><?php endif;?>
 
<?php if($_GET['c']=='dreamplug') : ?>   
		<section class="content">
			<hr><h1>Dreamplug Technologies</h1><hr>
			<section class="company-details">
<label>About us:</label>
<ul>
<li>Dreamplug technologies is an early stage startup that is exploring solutions in
industries such as healthtech, education & consumer retail.
<li>This is an opportunity to work with an exciting tech startup in India. It is an early
stage startup founded by successful entrepreneur, Kunal Shah (Freecharge).
The team members are alumni of organisations such as Sequoia, Mckinsey &
Company, AT Kearney, Thoughtworks, Grab, Go-JEK, Ola and Flipkart.
</ul>
<label>Job Description: (Market Research) </label>
<ol>
<li>Dreamplug Technologies is hiring interns for conducting qualitative and
quantitative research. The work involves conducting surveys at malls and other
areas which attracts high spending people, with an aim to understand consumer
behavior and psyche.
<li>Analysis and generating Insights from these surveys
<li>Timings of the internship is flexible and can be discussed during the interview.
</ol>
<br><br>
<p>The internship is based out in Mumbai, Bangalore & Delhi</p>
<label>Skills Needed:</label>
<ul>
<li>Excellent Communication Skills
<li>Confidence to do short customer surveys in malls
<li>Any past experience in primary research is valuable, but not mandatory
</ul>
<label>Stipend:</label> <p> 9.5k/per month+ variable bonus & Internship Certificate</p>
<label>Duration:</label> <p>2 months<br><br>
Send your CV’s to: vivek@dreamplug.in	</p>		
          
</section><?php endif;?>


	<?php if($_GET['c']=='mullen') : ?>   
		<section class="content">
			<hr><h1>MullenLowe Lintas Group </h1><hr>
			<section class="company-details">
<label>About Internship:</label><br>
<p>Visit our company website which will give you detail information about
MullenLowe Lintas.
<a href="http://www.mullenlowelintas.in/us/">www.mullenlowelintas.in/us/</a><br><br>
We will be recruiting specifically for Linengage which is a part of Pointnine
Lintas.<br><br>

Location for these interns will be our Lower Parel office and stipend will be
between Rs.15,000 - Rs.20,000 pm less TDS. (Compulsory Submission of PAN and
Aadhar Card).<br><br>
We are looking for interns for 6 months who will then be confirmed basis
performance for the following functions:<br></p>
<ol type="1">
<li>Creative Copy (Lateral thinkers who are articulate in their communication)
<li>Creative Art (Candidates need to be proficient in art soft wares like Photoshop,
illustrator)</ol><br><p>Interested students please send the cvs to jaihindplacementcell@gmail.com</p><br>



                

           
</section><?php endif;?>
	
	
	
	<?php if($_GET['c']=='kotak') : ?>   
		<section class="content">
			<hr><h1>KOTAK REALTY FUND
(INTERNSHIP)
</h1><hr>
			<section class="company-details">
<label>About Company:</label><br>
<p>Kotak Realty Fund (KRF) is a real estate private equity fund which has raised in excess
of USD 1.47 billion. We focus on investments in real estate and real estate intensive businesses.
We are a part of Kotak Mahindra Group, one of Indias leading financial conglomerates.
We currently provide investment management services to multiple funds that are domiciled in India and provide investment advisory services in relation to Offshore
Funds.</p><br>



                <label>Profile offered: </label><br>

				<p> INTERN - REALTY FUND</p><br>
			
				<label>About the Profile: </label><br>
<ul>
<li>Financial Modelling <br>
(Ease of creating excel models and accuracy of output)
<li>Analytical Skills<br>
(A sound understanding of analytical principles &amp; financial conceptual understanding is required. Ability to translate the understanding to the real world situations &amp; financial modeling skills are essential)
<li>Data Sourcing &amp; Analysis<br>
(The trainee is expected to show initiative &amp; drive in data sourcing analysis &amp; a high level of awareness of the sector. Ability to cull information from data is essential)
<li>Identification of new markets/categories<br>
(The trainee must spend time during free time visiting new markets &amp; existing markets to get better understanding of the same so that the underwriting process is faster. Based on the markets knowledge &amp; relationships with intermediaries, investee companies identify new categories to stay of the curve)
				</ul><br>



	<label>Eligibility: </label><br><p>BAF, BFM &amp; BMS 3 rd year students or Graduates.</p><br>

	<label>Duration:</label><br> <p>6 months minimum.</p><br>
	<label>Stipend:</label><br><p> INR 16,000 per month.</p><br>

<p>
 

Eligible candidates can forward their resume to: jaydev.amersey@kotak.com &amp; arpit.khandelwal@kotak.com <bR>

           
</section><?php endif;?>


	
	<?php if($_GET['c']=='wp') : ?>   
		<section class="content">
			<hr><h1>White Panda</h1><hr>
			<section class="company-details">
				<label>About Company: </label>
				<p>White Panda is a content development platform connecting businesses in need of content to quality freelance writers. Every business needs quality original content to build or reinforce its online presence and engage its customer base. White Panda provides smart content for smart businesses and encourages the promising aspirants to learn about content marketing through White Panda Virtual Writing Internship programme.</p><br>   
                <p>This internship is a two-month long programme starting from December 15, 2017, until February 17, 2018. During this internship, the selected interns shall be trained about the basics of Content Writing & Content Marketing. PFA the detailed description of the roles and responsibilities of virtual writing interns.</p><br> <p> 
Interested candidates may drop their CV/resume at ajit@whitepanda.in  </p><br>


         <label>Profile offered: </label><br>
				<p>Content Writing Intern</p><br> 
				<label>Roles and Responsibilities of Content Writing Interns: </label>
                <ul>
                <li>Coordinating with core team for understanding the elements of content marketing
and developing content accordingly.
<li>Creating thematic blog articles and posts for our community.
<li>Proofread/edit all content pieces for accuracy.
                </ul><br>
     
                <label>Compensation: </label>
				<p>Internship Certificate</p>
                         <label>Perks:   </label><br>                 
				<p>Work from Home, Pre Placement Offer</p><br>
                       <label>Apply at:   </label><br>                 
				<p>ajit@whitepanda.in with CV/resume</p><br>

		
           
</section><?php endif;?>

	</section>
		<footer>
			<div>
				<h5 align="center">All Rights Reserved &copy;  Placement Cell Jai Hind College</h5>
				<nav id="fnav">
					<ul>
						<li><a href="index.html">Home</a>|</li>
						<li><a href="announcements.html">Announcements</a>|</li>
						<li><a href="opportunities.php">Placements</a>|</li>
						<li><a href="internships.html">Internships</a>|</li>
						<li><a href="help.php">Help</a></li>
					</ul>
				</nav><br>
				<!-- <p align="center">Developed and Maintained by: <b>Preetika Shetty</b> and <b>Sumeet Sharma</b></p>-->
			</div>
		</footer></div>
	</body>
	</html>