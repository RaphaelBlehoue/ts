<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class SecurityController
 * @package App\Controller
 * @Route("/auth")
 */
class SecurityController extends Controller
{
    /**
     * @Route("/signin", name="security_login", methods={"POST","GET"}, schemes={"%secure_channel%"})
     */
    public function login()
    {
        return $this->render('security/signin.html.twig');
    }
}
