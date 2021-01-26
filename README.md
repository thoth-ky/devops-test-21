# DevOps Engineer - technical interview

## Testing goals
  * With this test, we want to see your ability to create an entire infrastructure from scratch as well as your skills as a system administrator.

## The task
  * Your task is to provision a node.js app of your choosing with  nginx/httpd frontend proxy.

## The solution
  * In your solution please emphasize on readability, maintainability and DevOps methodologies. We expect a clear way to recreate your setup.

  * Use Ansible/Chef/Puppet as the configuration management tool.
  * The infrastructure provider should be AWS.
  * It should run on Centos 7, using security best practices.
  * Should leverage community roles/cookbooks/modules when it make sense.
  * Make sure to include a appropriate methods so that all roles/cookbooks/modules can be installed when ran.

  * A clean bare minimum working infrastructure is preferred than a full blown solution pieced together with scissors, rope and duct tape. Do not skip security considerations.

## When you are finished
  * Submit your solution to a Github repository and send us a link.
  * Make sure your README tells us how to run it.
  * Please fork this repo so that you are tested against the test that you started with as this test may change.

## Bonus Points
  * For setting up frontend proxy to use ssl.
  * Setting frontend proxy to redirect to ssl when request is coming over http.
