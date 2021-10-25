<!DOCTYPE html>
<html>
<?php
include_once('includes/head.php');
include_once('includes/navbar.php');
require 'modules/Projects.php';
$projects = getAllProjects();
?>
<link rel="stylesheet" href="../css/projects.css">
<body>

        <div class="container">
            <h1>
                Projects
            </h1>
        </div>
        <div class="container container-color">
            <h2>
                Here are some of my projects so far
            </h2>
            <div class="card-deck">
                <?php foreach ($projects as $project): ?>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h4><?= $project->name; ?></h4>
                        </div>
                        <img class="card-img-top card-size auto d-block img-fluid" src="<?= $project->image; ?>" alt="image">
                        <div class="card-body">
                            <hr>
                            <p><?= $project->description; ?></p>
                        </div>
                        <div class="card-footer">
                            <a href="<?= $project->link; ?>" class="bnt button  button " target="_blank">
                                Click here 
                            </a>
                        </div>
                    </div> 
                </div>
            <?php endforeach; ?>
            </div>
        </div>
<?php
include_once('includes/footer.php');
?>
    </body>
</html>