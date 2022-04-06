USE hcv_data;
DROP TABLE opportunities;

CREATE TABLE opportunities (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    category VARCHAR(200),
    description LONGTEXT,
    qualifications LONGTEXT,
    modality VARCHAR(200),
    paid BOOLEAN,
    cost INT,
    stipend INT,
    financial_aid BOOLEAN,
    website VARCHAR(2083),
    image_path VARCHAR(2083),
    reviews LONGTEXT,
	start_date DATE,
	end_date DATE,
    application_deadline DATE,
	created_At datetime DEFAULT NULL COMMENT 'created time',
	updated_At datetime DEFAULT NULL COMMENT 'updated time'
);

INSERT INTO opportunities(id, name, category, description, qualifications, modality, paid, cost, stipend, financial_aid, website, image_path, reviews, start_date, end_date, application_deadline, created_At, updated_At)
VALUES (1, "Boolean Logic and Binary Lab", "Enrichment Exposure Exploration", "Part of SPARK Saturdays - a program created by volunteers studying Electrical and Computer Engineering at Carnegie Mellon University that aims to introduce beginners to concepts within electrical and computer engineering and expose them to engineering as a potential career choice. SPARK Saturdays is structured to be six sessions, held on campus about every other Saturday. Each session lasts two hours and consist of a learning portion and a hands-on activity, led by CMU students. The entire SPARK Saturdays series is held once every semester, and aimed at high school students. No prior knowledge on the part of the students is assumed. The sessions are structured to introduce students to a wide variety of electrical and computer engineering concepts to help them decide whether this might be a good career path for them.",
"null", "null", true, 5, 0, false, "http://eceoutreach.ece.cmu.edu/spark-saturdays/program.html", "null", "null", null, null, null, null, null),
(2, "Women's Elite ID Fall Mini Camp - Fall 2022", "Sports Teams", "Part of CMU's variety of camps and clinics are offered each summer. For competitive female soccer players interested in attending Carnegie Mellon University.",
"null", "null", false, 0, 0, false, "https://athletics.cmu.edu/athletics/camps-clinics", "null", "null", null, null, null, null, null),
(3, "Shadow Observer Experience - Allegheny Health Network","Apprenticeships", "The job shadow program will allow you to observe an employee performing his/her daily duties at the following facilities: Allegheny General Hospital (AGH), Allegheny Valley Hospital (AVH), Canonsburg Hospital (CH), Forbes Hospital (Forbes), Saint Vincent Hospital (Erie, Pa.), West Penn Hospital (WPH) and the Allegheny Clinic (physician offices). There is a maximum of 16 hours within a year for someone to shadow.  Students interested in experiences beyond 16 hours should contact healthsciences@ahn.org to learn more about our internship/externship guidelines.",
"null", "null", false, 0, 0, false, "https://www.ahn.org/health-care-professionals/education/career-exploration/shadow-observer-experience.html", "null", "null", null, null, null, null, null),
(4, "Programming Lab", "Enrichment Exposure Exploration", "Part of SPARK Saturdays - a program created by volunteers studying Electrical and Computer Engineering at Carnegie Mellon University that aims to introduce beginners to concepts within electrical and computer engineering and expose them to engineering as a potential career choice. SPARK Saturdays is structured to be six sessions, held on campus about every other Saturday. Each session lasts two hours and consist of a learning portion and a hands-on activity, led by CMU students. The entire SPARK Saturdays series is held once every semester, and aimed at high school students. No prior knowledge on the part of the students is assumed. The sessions are structured to introduce students to a wide variety of electrical and computer engineering concepts to help them decide whether this might be a good career path for them.",
"null", "null", true, 5, 0, false, "http://eceoutreach.ece.cmu.edu/spark-saturdays/program.html", "null", "null", null, null, null, null, null);

SELECT * FROM opportunities LIMIT 20;
