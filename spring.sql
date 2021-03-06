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
INSERT INTO `assessment_table` VALUES (52501,1,'Jagannath Pidaparthy',80),(52501,2,'Jagannath Pidaparthy',60),(52501,3,'Jagannath Pidaparthy',80),(52501,4,'Jagannath Pidaparthy',60),(52501,5,'Jagannath Pidaparthy',80),(52501,6,'Jagannath Pidaparthy',80),(52501,7,'Jagannath Pidaparthy',67),(52501,8,'Jagannath Pidaparthy',80),(52501,9,'Jagannath Pidaparthy',70),(52502,1,'Vishal Patil',80),(52502,2,'Vishal Patil',80),(52502,3,'Vishal Patil',80),(52502,4,'Vishal Patil',80),(52502,5,'Vishal Patil',80),(52502,6,'Vishal Patil',80),(52502,7,'Vishal Patil',80),(52502,8,'Vishal Patil',80),(52502,9,'Vishal Patil',82),(52503,1,'Preetika Shetty',97),(52503,2,'Preetika Shetty',97),(52503,3,'Preetika Shetty',97),(52503,4,'Preetika Shetty',97),(52503,5,'Preetika Shetty',97),(52503,6,'Preetika Shetty',97),(52503,7,'Preetika Shetty',97),(52503,8,'Preetika Shetty',97),(52503,9,'Preetika Shetty',98),(52504,1,'Sagar Mishra',96),(52504,2,'Sagar Mishra',96),(52504,3,'Sagar Mishra',96),(52504,4,'Sagar Mishra',96),(52504,5,'Sagar Mishra',96),(52504,6,'Sagar Mishra',96),(52504,7,'Sagar Mishra',96),(52504,8,'Sagar Mishra',96),(52504,9,'Sagar Mishra',96),(52505,1,'Shubham Mishra',93),(52505,2,'Shubham Mishra',93),(52505,3,'Shubham Mishra',93),(52505,4,'Shubham Mishra',93),(52505,5,'Shubham Mishra',93),(52505,6,'Shubham Mishra',93),(52505,7,'Shubham Mishra',93),(52505,8,'Shubham Mishra',93),(52505,9,'Shubham Mishra',93),(52506,1,'Kanchan Soni',95),(52506,2,'Kanchan Soni',95),(52506,3,'Kanchan Soni',95),(52506,4,'Kanchan Soni',95),(52506,5,'Kanchan Soni',95),(52506,6,'Kanchan Soni',95),(52506,7,'Kanchan Soni',95),(52506,8,'Kanchan Soni',95),(52506,9,'Kanchan Soni',95),(52507,1,'Jai Lohani',92),(52507,2,'Jai Lohani',92),(52507,3,'Jai Lohani',92),(52507,4,'Jai Lohani',92),(52507,5,'Jai Lohani',92),(52507,6,'Jai Lohani',92),(52507,7,'Jai Lohani',92),(52507,8,'Jai Lohani',92),(52507,9,'Jai Lohani',92),(52508,1,'Korol Dhanda',85),(52508,2,'Korol Dhanda',85),(52508,3,'Korol Dhanda',85),(52508,4,'Korol Dhanda',85),(52508,5,'Korol Dhanda',85),(52508,6,'Korol Dhanda',85),(52508,7,'Korol Dhanda',85),(52508,8,'Korol Dhanda',85),(52508,9,'Korol Dhanda',85),(52509,1,'kaustubh Srivastava',91),(52509,2,'kaustubh Srivastava',91),(52509,3,'kaustubh Srivastava',91),(52509,4,'kaustubh Srivastava',91),(52509,5,'kaustubh Srivastava',91),(52509,6,'kaustubh Srivastava',91),(52509,7,'kaustubh Srivastava',91),(52509,8,'kaustubh Srivastava',91),(52509,9,'kaustubh Srivastava',97),(52510,1,'Purva Shinde',90),(52510,2,'Purva Shinde',90),(52510,3,'Purva Shinde',90),(52510,4,'Purva Shinde',90),(52510,5,'Purva Shinde',90),(52510,6,'Purva Shinde',90),(52510,7,'Purva Shinde',90),(52510,8,'Purva Shinde',90),(52510,9,'Purva Shinde',80);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
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
INSERT INTO `training_material` VALUES (9,'/assets/Angular 4.pdf'),(8,'/assets/Bootstrap.pdf'),(2,'/assets/CSS_3_version_1.1.pdf'),(2,'/assets/CSS-Assignment.docx'),(5,'/assets/data_creation_script.sql'),(1,'/assets/HTML_5.pdf'),(1,'/assets/HTML-Assignment.docx'),(3,'/assets/JavaScript.pdf'),(5,'/assets/RDBMS _ SQL-Ver1.2.pdf');
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
  `contact` bigint(20) DEFAULT NULL,
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
INSERT INTO `user_details` VALUES (52501,'Jagannath Pidaparthy','jagan241296@gmail.com',7507079634,'student','male','1bbd886460827015e5d605ed44252251','It is done'),(52502,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52503,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52504,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52505,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52506,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52507,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52508,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52509,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(52510,NULL,NULL,NULL,'student',NULL,NULL,'Tell me about yourself'),(1001,'Aruna Kameswari','aruna.kameswari@gmail.com',8799939440,'trainer','female','1bbd886460827015e5d605ed44252251','I am an awesome mother'),(1002,NULL,NULL,NULL,'trainer',NULL,NULL,'Tell me about yourself'),(1003,NULL,NULL,NULL,'trainer',NULL,NULL,'Tell me about yourself');
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

-- Dump completed on 2018-08-20 20:25:25
