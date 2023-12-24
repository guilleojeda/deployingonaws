Create AWS Account
https://aws.amazon.com/free/

Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

Mac
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /

Windows
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi

How to verify installation
aws --version

How to configure the CLI
aws configure

Optional for profiles
aws configure --profile profile_name