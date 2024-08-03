CREATE TABLE Colleges (
    CollegeID INT PRIMARY KEY AUTO_INCREMENT,
    CollegeName VARCHAR(100) NOT NULL,
    CollegeAddress VARCHAR(255)
);

CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Role ENUM('Student', 'Teacher', 'Administrator') NOT NULL,
    CollegeID INT,
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID)
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    CourseName VARCHAR(100) NOT NULL,
    CourseDescription TEXT,
    CollegeID INT,
    TeacherID INT,
    FOREIGN KEY (CollegeID) REFERENCES Colleges(CollegeID),
    FOREIGN KEY (TeacherID) REFERENCES Users(UserID)
);

CREATE TABLE Forms (
    FormID INT PRIMARY KEY AUTO_INCREMENT,
    FormName VARCHAR(100) NOT NULL,
    FormDescription TEXT,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
