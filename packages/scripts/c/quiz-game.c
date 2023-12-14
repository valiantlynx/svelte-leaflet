#include <stdio.h>
#include <ctype.h>

int main()
{
    char questions[][100] = {
        "What is the capital of India?\n",
        "What is the capital of USA?\n",
        "What is the capital of Russia?\n",
        "What is the capital of China?\n",
        "What is the capital of Japan?\n",
        "What is the capital of Australia?\n",
        "What is the capital of Canada?\n",
        "What is the capital of Brazil?\n",
        "What is the capital of Argentina?\n",
        "What is the capital of South Africa?\n"};

    char options[][100] = {
        "A. New Delhi\nB. Mumbai\nC. Kolkata\nD. Chennai",
        "A. New York\nB. Washington DC\nC. Los Angeles\nD. Chicago",
        "A. Moscow\nB. St. Petersburg\nC. Novosibirsk\nD. Yekaterinburg",
        "A. Beijing\nB. Shanghai\nC. Tianjin\nD. Guangzhou",
        "A. Tokyo\nB. Osaka\nC. Kyoto\nD. Yokohama",
        "A. Sydney\nB. Melbourne\nC. Brisbane\nD. Perth",
        "A. Toronto\nB. Montreal\nC. Vancouver\nD. Ottawa",
        "A. Sao Paulo\nB. Rio de Janeiro\nC. Brasilia\nD. Salvador",
        "A. Buenos Aires\nB. Cordoba\nC. Rosario\nD. Mendoza",
        "A. Johannesburg\nB. Cape Town\nC. Durban\nD. Pretoria"};

    char answers[10] = {'A', 'B', 'A', 'A', 'A', 'A', 'D', 'C', 'A', 'B'};
    int numberOfQuestions = sizeof(questions) / sizeof(questions[0]);

    char guess;
    int score;

    printf("QUIZ GAME!\n");

    for (int i = 0; i < numberOfQuestions; i++)
    {
        printf("%s", questions[i]);
        printf("%s\n", options[i]);
        scanf(" %c", &guess);

        if (guess == answers[i])
        {
            score = score + 1;
            printf("correct!\n------------\n");
        }
        else
        {
            printf("incorrect!\n------------\n");
        }
    };

    printf("Your score: %i of %i", score, numberOfQuestions);

    return 0;
}
