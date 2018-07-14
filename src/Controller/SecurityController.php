<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * Class SecurityController
 * @package App\Controller
 * @Route("/auth")
 */
class SecurityController extends Controller
{

    /**
     * @Route("/signin", name="security_login")
     * @param Request $request
     * @param AuthenticationUtils $authenticationUtils
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request, AuthenticationUtils $authenticationUtils)
    {
        if ($request->isXmlHttpRequest()){
            $error = $authenticationUtils->getLastAuthenticationError();
            $lastUsername = $authenticationUtils->getLastUsername();
            $checker = $this->get('security.authorization_checker');
            if (TRUE === $checker->isGranted('ROLE_ADMIN')){
                $url = $this->generateUrl('homepage');
                return new JsonResponse(['data' => $url], 200);
                //return $this->redirectToRoute('homepage');
            }
            return new JsonResponse(['data' => $error, 'lastUsername' => $lastUsername, 'status' => 'error'], Response::HTTP_UNAUTHORIZED);
        }
        return $this->render('security/signin.html.twig');
    }

    /**
     * La route pour se deconnecter.
     *
     * Mais celle ci ne doit jamais être executé car symfony l'interceptera avant.
     *
     *
     * @Route("/logout", name="security_logout")
     * @throws \Exception
     */
    public function logout(){
        throw new \Exception('This should never be reached!');
    }

    /**
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/secure/register", name="register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $users = new User();
        $form = $this->createForm(RegisterType::class, $users);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $users->setRoles(['ROLE_ADMIN']);
            $entityManager->persist($users);
            $entityManager->flush();
            $this->authenticateUser($users);
            return $this->redirectToRoute('account', array(), 301);
        }
        return $this->render('security/signup_page.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @param Users $users
     */
    private function authenticateUser(User $users)
    {
        $providerKey = 'main';
        $token = new UsernamePasswordToken($users, null, $providerKey, $users->getRoles());
        $this->container->get('security.token_storage')->setToken($token);
    }
}
