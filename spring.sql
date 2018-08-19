-- MySQL dump 10.13  Distrib 5.1.33, for Win32 (ia32)
--
-- Host: localhost    Database: springboard
-- ------------------------------------------------------
-- Server version	5.1.33-community

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assessment_table`
--

DROP TABLE IF EXISTS `assessment_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assessment_table` (
  `empcode` int(10) NOT NULL DEFAULT '0',
  `subject_id` int(10) NOT NULL DEFAULT '0',
  `empname` varchar(50) DEFAULT NULL,
  `percent` int(10) DEFAULT NULL,
  PRIMARY KEY (`empcode`,`subject_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment_table`
--

LOCK TABLES `assessment_table` WRITE;
/*!40000 ALTER TABLE `assessment_table` DISABLE KEYS */;
INSERT INTO `assessment_table` VALUES (1,1,'Jagannath Pidaparthy',90),(1,2,'Jagannath Pidaparthy',90),(1,3,'Jagannath Pidaparthy',90),(1,4,'Jagannath Pidaparthy',90),(1,5,'Jagannath Pidaparthy',90),(1,6,'Jagannath Pidaparthy',90),(1,7,'Jagannath Pidaparthy',90),(1,8,'Jagannath Pidaparthy',90),(1,9,'Jagannath Pidaparthy',90),(2,1,'Vishal Patil',82),(2,2,'Vishal Patil',82),(2,3,'Vishal Patil',82),(2,4,'Vishal Patil',82),(2,5,'Vishal Patil',82),(2,6,'Vishal Patil',82),(2,7,'Vishal Patil',82),(2,8,'Vishal Patil',82),(2,9,'Vishal Patil',82),(3,1,'Prretika Shetty',99),(3,2,'Prretika Shetty',99),(3,3,'Prretika Shetty',99),(3,4,'Prretika Shetty',99),(3,5,'Prretika Shetty',99),(3,6,'Prretika Shetty',99),(3,7,'Prretika Shetty',99),(3,8,'Prretika Shetty',99),(3,9,'Prretika Shetty',99),(4,1,'Sagar Mishra',99),(4,2,'Sagar Mishra',99),(4,3,'Sagar Mishra',99),(4,4,'Sagar Mishra',99),(4,5,'Sagar Mishra',99),(4,6,'Sagar Mishra',99),(4,7,'Sagar Mishra',99),(4,8,'Sagar Mishra',99),(4,9,'Sagar Mishra',99),(5,1,'Shubham Mishra',93),(5,2,'Shubham Mishra',93),(5,3,'Shubham Mishra',93),(5,4,'Shubham Mishra',93),(5,5,'Shubham Mishra',93),(5,6,'Shubham Mishra',93),(5,7,'Shubham Mishra',93),(5,8,'Shubham Mishra',93),(5,9,'Shubham Mishra',93),(6,1,'Kanchan Soni',95),(6,2,'Kanchan Soni',95),(6,3,'Kanchan Soni',95),(6,4,'Kanchan Soni',95),(6,5,'Kanchan Soni',95),(6,6,'Kanchan Soni',95),(6,7,'Kanchan Soni',95),(6,8,'Kanchan Soni',95),(6,9,'Kanchan Soni',95),(7,1,'Jai Lohani',92),(7,2,'Jai Lohani',92),(7,3,'Jai Lohani',92),(7,4,'Jai Lohani',92),(7,5,'Jai Lohani',92),(7,6,'Jai Lohani',92),(7,7,'Jai Lohani',92),(7,8,'Jai Lohani',92),(7,9,'Jai Lohani',92),(8,1,'Korol Dhanda',85),(8,2,'Korol Dhanda',85),(8,3,'Korol Dhanda',85),(8,4,'Korol Dhanda',85),(8,5,'Korol Dhanda',85),(8,6,'Korol Dhanda',85),(8,7,'Korol Dhanda',85),(8,8,'Korol Dhanda',85),(8,9,'Korol Dhanda',85),(9,1,'kaustubh Srivastava',97),(9,2,'kaustubh Srivastava',97),(9,3,'kaustubh Srivastava',97),(9,4,'kaustubh Srivastava',97),(9,5,'kaustubh Srivastava',97),(9,6,'kaustubh Srivastava',97),(9,7,'kaustubh Srivastava',97),(9,8,'kaustubh Srivastava',97),(9,9,'kaustubh Srivastava',97),(10,1,'Purva Shinde',80),(10,2,'Purva Shinde',80),(10,3,'Purva Shinde',80),(10,4,'Purva Shinde',80),(10,5,'Purva Shinde',80),(10,6,'Purva Shinde',80),(10,7,'Purva Shinde',80),(10,8,'Purva Shinde',80),(10,9,'Purva Shinde',80);
/*!40000 ALTER TABLE `assessment_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject_list`
--

DROP TABLE IF EXISTS `subject_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subject_list` (
  `subject_id` int(10) NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(50) DEFAULT NULL,
  `category` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject_list`
--

LOCK TABLES `subject_list` WRITE;
/*!40000 ALTER TABLE `subject_list` DISABLE KEYS */;
INSERT INTO `subject_list` VALUES (1,'HTML','Client Side'),(2,'CSS','Client Side'),(3,'JS','Client Side'),(4,'MongoDB','Database'),(5,'SQL','Database'),(6,'Python','Server side'),(7,'PHP','Server side'),(8,'Bootstrap','Client Side'),(9,'Angular','Client Side');
/*!40000 ALTER TABLE `subject_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `training_material`
--

DROP TABLE IF EXISTS `training_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `training_material` (
  `subject_id` int(10) DEFAULT NULL,
  `file_path` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `training_material`
--

LOCK TABLES `training_material` WRITE;
/*!40000 ALTER TABLE `training_material` DISABLE KEYS */;
INSERT INTO `training_material` VALUES (1,'uploads/Builder Occupancy Certificate_Flat No.208.pdf'),(4,'material/Mongo Training.pptx'),(3,'material/JavaScript.pdf'),(1,'material/HTML_5.pdf'),(1,'material/HTML-Assignment.docx'),(2,'material/CSS_3_version_1.1.pdf'),(2,'material/CSS-Assignment.docx');
/*!40000 ALTER TABLE `training_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_details` (
  `empcode` int(11) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contact` int(11) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT 'Tell me about yourself'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (123456,'Tester','test@gmail.com',1234567890,'student','male','1bbd886460827015e5d605ed44252251','Tell me about yourself'),(654321,'Nisha Waikar','s@gm.com',1234567890,'trainer','female','1bbd886460827015e5d605ed44252251','Tell me about yourself'),(123321,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself'),(52508,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself'),(52498,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself'),(52538,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself'),(52510,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself'),(52512,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself'),(52506,NULL,NULL,NULL,NULL,NULL,NULL,'Tell me about yourself');
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-19 20:09:03
