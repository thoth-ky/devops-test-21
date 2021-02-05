# Provisioning React App With Ansible

## Technologies Used

- Ansible
- React
- AWS EC2
- Linux Ubuntu 18.04


## Setup

1. Install ansible from requirements and install collection dependencies
```bash
    $  pip install -r python-requirements.txt
    $ ansible-galaxy collection install community.crypto  # used for generating SSL certs/key
    $ ansible-galaxy collection install amazon.aws # create aws resources

```

2. Acquire Ansible vault password (from me/admin) or replace `ansible/secret.yml` with your own key as:
    ```
        akey: "YOUR_AWS_ACESS_KEY"
        skey: "YOUR_AWS_SECRET_KEY"
    ```
    and then encrypt with
    ```bash
        ansible-vault encrypt secret.yml
    ```
3. Set AWS credentials in the env
    ```bash
        $ export AWS_REGION="YOUR_DESIRED_REGION"
        $ export AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY"
        $ export AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_KEY"
    ```
4. Using `vaultpass` as the file containing your encryption pasword. Run the playbook
    ```bash
        $ ansible-playbook --vault-password-file=vaultpass final-playbook.yml
    ```


## Achievements

- Able to setup frontend proxy to redirect to ssl when request is via http
- Able to generate a self sgined cert/key
- Runs all in one playbook

## Author
- [Joseph Kyalo](https://www.linkedin.com/in/mutuku-kyalo-th/)