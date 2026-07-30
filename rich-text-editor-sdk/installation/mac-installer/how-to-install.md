---
layout: post
title: Installing Syncfusion Rich Text Editor SDK Mac Installer - Syncfusion
description: Learn here about how to install the Syncfusion Rich Text Editor SDK Mac installer after downloading it from the Syncfusion website.
platform: rich-text-editor-sdk
control: Installation and Deployment
documentation: ug
---

# Installing Syncfusion Rich Text Editor SDK Mac Installer

## Steps to Resolve the Warning Message in Catalina OS or Later

While running the Syncfusion Rich Text Editor SDK Mac installer on Catalina macOS or later, the following alert will be displayed.

![Alert Image](images/Mac_Catalina_MacOS_Alert1.png)

If you receive this alert, follow the steps below for the easiest solution.

1. Right-click the downloaded .pkg file.
2. Select the **Open With** option and choose **Installer (Default)**. The following pop-up appears.

   ![pop-up Image](images/Mac_Catalina_MacOS_Alert2.png)

3. When you click **Open**, the installer window will open.

   **Alternative workaround:** Open **System Preferences → Security & Privacy → General**, and click **Open Anyway** next to the blocked installer message.

## Step-by-Step Installation

The steps below show how to install the Syncfusion Rich Text Editor SDK Mac installer.

1. Open the Syncfusion Rich Text Editor SDK Mac installer (.pkg) file. The installer wizard opens. Click **Continue**.

   ![Welcome wizard](images/Mac_Installer1.png)

2. The Software License Agreement wizard will appear. Click the **Continue** button.

   ![License Agreement](images/Mac_Installer2.png)

3. The License Agreement's confirmation window will appear. If you have read the Software License Agreement, click **Agree**.

   ![License Agree Confirmation](images/Mac_Installer3.png)

   N> The Unlock key is not required to install the Syncfusion Rich Text Editor SDK Mac installer.

4. The Destination Select wizard will appear. You can choose which disk to install the Syncfusion Rich Text Editor SDK Mac installer on.

   ![Destination](images/Mac_Installer5.png)

5. The Installation Type wizard will appear. Click **Install** to begin the standard installation of the Syncfusion Rich Text Editor SDK Mac installer.

   ![Install Location](images/Mac_Installer6.png)

6. The Authentication window will appear. To begin the installation, enter the Mac machine's password and click **Install Software**.

   ![Authentication](images/Mac_Installer7.png)

7. The installation process will begin on your Mac. Wait for the progress bar to complete.

   ![Installation progress](images/Mac_Installer8.png)

8. Once the installation is complete, the completion screen will be displayed. To exit the installation wizard, click **Close**.

   ![Installation Completed](images/Mac_Installer9.png)

### Default Install Location

By default, the Mac installer will install the files in the following location:

   **Location:** {Documents}/Syncfusion/{version}/Rich Text Editor SDK
   
   ![Installed Location](images/Mac_Installer10.png)

## License Key Registration in Samples

After the installation, the license key is required to register the demo source included in the Mac installer. To register the license key for the ASP.NET Core - EJ2 samples in the Syncfusion Rich Text Editor SDK Mac installer, refer to the steps below.

* Register the license key in the [Program.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-60) file if you created the ASP.NET Core web application with Visual Studio 2022 and .NET 6.0.
* Register the license key in Configure method of [Startup.cs](https://ej2.syncfusion.com/aspnetcore/documentation/licensing/how-to-register-in-an-application#for-aspnet-core-application-using-net-50-or-net-31)